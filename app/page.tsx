"use client";
import ProductList from "./components/product-list"
import { products } from "./product-data"
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const [selections, setSelections] = useState<ProductSelection[]>([]);
  const [customerData, setCustomerData] = useState({
    name: '',
    team: '',
    contact: ''
  });
  const [showErrors, setShowErrors] = useState(false);
  const [countdown, setCountdown] = useState(5);

  interface ProductSelection {
    productId: string;
    selections: {
      size: string;
      quantity: string;
      initials: string;
    }[];
  }

  // Countdown-Timer für die Fehlermeldung
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (showErrors) {
      setCountdown(8);
      
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowErrors(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [showErrors]);

  const updateSelection = (productId: string, selections: any[]) => {
    setSelections((prevSelections) => {
      // Finde existierenden Eintrag für das Produkt oder erstelle einen neuen
      const existingIndex = prevSelections.findIndex(item => item.productId === productId);
      
      if (existingIndex >= 0) {
        const updatedSelections = [...prevSelections];
        updatedSelections[existingIndex] = { productId, selections };
        return updatedSelections;
      } else {
        return [...prevSelections, { productId, selections }];
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setCustomerData(prev => ({
      ...prev,
      team: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Bereite die Order-Daten für die API vor
    const orderData = {
      customer: customerData,
      order: selections.filter(item => item.selections && item.selections.length > 0)
    };

    const response: Response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (response.ok) {
      // Erfolgsmeldung anzeigen und die Formularfelder zurücksetzen
      alert('Deine Bestellung wurde erfolgreich gesendet!');
      resetForm();
    } else {
      alert('Fehler beim Senden der Bestellung. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt.');
    }
  };

  // Funktion zum Zurücksetzen aller Formulardaten
  const resetForm = () => {
    // Kundendaten zurücksetzen
    setCustomerData({ name: '', team: '', contact: '' });
    
    // Produktauswahlen zurücksetzen
    setSelections([]);
    
    // Event auslösen, um Produktauswahlen in Kind-Komponenten zurückzusetzen
    window.dispatchEvent(new CustomEvent('resetProductSelections'));
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    // Prüfen, ob die Bedingungen für eine gültige Formularübermittlung erfüllt sind
    const isFormValid = selections.some(item => item.selections && item.selections.length > 0) 
                        && !!customerData.name 
                        && !!customerData.contact;
    
    if (!isFormValid) {
      e.preventDefault();
      setShowErrors(true);
    }
  };

  return (
    <main className="container mx-auto p-6 max-w-screen-md">
      <h1 className="text-3xl font-semibold mb-6">TuS Feuchtwangen Teamwear</h1>
      <ul className="mb-5 list-disc pl-8">
        <li><span className="font-medium">Lieferzeit</span>: je nach Verfügbarkeit ca. 2-3 Wochen</li>
        <li><span className="font-medium">Personalisierung</span>: Initialen und Nummer möglich, maximal 4 Zeichen. Aufpreis: 3,00 €</li>
        <li><span className="font-medium">Bezahlung</span>: bar oder per PayPal bei Übergabe</li>
        <li><span className="font-medium">Lieferung</span>: die Übergabe der fertigen Klamotten erfolgt beim Training</li>
        <li><span className="font-medium">Retoure</span>: ausgeschlossen, da personalisierte Ware</li>
      </ul>
      <p className="mb-5">Bei Fragen an Michael Geißler wenden (<a href="tel:+491783137341">0178 / 3137341</a> oder <a href="mailto:geisslersmichi@gmail.com">geisslersmichi@gmail.com</a>)</p>
      <hr className="pb-12"/>
        <ProductList products={products} updateSelection={updateSelection}/>
      <hr className="pt-12 pb-6"/>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold tracking-tight mb-4">Bestellung abschließen</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <Input
              name="name"
              value={customerData.name}
              onChange={handleInputChange}
              placeholder="Name des Spielers"
              aria-label="Name des Spielers"
              className={`w-full ${showErrors && !customerData.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              required
            />
          </div>
          <div className="lg:col-span-3">
            <Select value={customerData.team} onValueChange={handleSelectChange}>
              <SelectTrigger aria-label="Mannschaft" className="w-full">
                <SelectValue placeholder="Mannschaft" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="G-Jugend">G-Jugend</SelectItem>
                <SelectItem value="F-Jugend">F-Jugend</SelectItem>
                <SelectItem value="E-Jugend">E-Jugend</SelectItem>
                <SelectItem value="D-Jugend">D-Jugend</SelectItem>
                <SelectItem value="C-Jugend">C-Jugend</SelectItem>
                <SelectItem value="B-Jugend">B-Jugend</SelectItem>
                <SelectItem value="A-Jugend">A-Jugend</SelectItem>
                <SelectItem value="Herren">Herren</SelectItem>
                <SelectItem value="Trainerteam">Trainer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="lg:col-span-4">
            <Input
              name="contact"
              value={customerData.contact}
              onChange={handleInputChange}
              placeholder="E-Mail / Telefon"
              aria-label="E-Mail / Telefon"
              className={`w-full ${showErrors && !customerData.contact ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              required
            />
          </div>
        </div>
        
        {showErrors && (
          <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-600 rounded-md animate-in fade-in duration-300 relative overflow-hidden">
            <div className="text-sm">
              {!selections.some(item => item.selections && item.selections.length > 0) && (
                <p>• Bitte wähle mindestens ein Produkt aus</p>
              )}
              {!customerData.name && (
                <p>• Bitte gib den Spieler-Namen ein</p>
              )}
              {!customerData.contact && (
                <p>• Bitte gib eine Telefonnummer oder E-Mailadresse für Rückfragen an</p>
              )}
            </div>
            
            {/* Countdown-Animation */}
            <div className="absolute bottom-0 left-0 h-1 bg-red-400 transition-all duration-1000" 
                 style={{ width: `${(countdown / 8) * 100}%` }}>
            </div>
            
            {/* Countdown-Anzeige */}
            <div className="absolute top-1 right-2 text-xs text-red-500 opacity-70">
              {countdown}
            </div>
          </div>
        )}
        
        <div className="mt-4" onClick={handleButtonClick}>
          <button 
            type="submit" 
            className={`bg-royalblue hover:bg-blue-500 text-white py-2 px-4 rounded mt-4 cursor-pointer ${!selections.some(item => item.selections && item.selections.length > 0) || !customerData.name || !customerData.contact ? 'opacity-50 bg-gray-500 cursor-not-allowed' : ''}`}
          >
            Bestellung abschicken
          </button>
        </div>
      </form>
      <p className="text-sm pt-6">Nach Abschluss deiner Bestellung, bekommst du eine Bestätigung per E-Mail oder WhatsApp. Bei Fragen an Michael Geißler wenden (<a href="tel:+491783137341">0178 / 3137341</a> oder <a href="mailto:geisslersmichi@gmail.com">geisslersmichi@gmail.com</a>)</p>
    </main>
  )
}

