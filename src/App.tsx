import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface NameMeaning {
  name: string;
  meaning: string;
  origin: string;
}

const namesList: NameMeaning[] = [
  { 
    name: "Pantelis",
    origin: "Greek",
    meaning: "From the Greek words 'pan' (all) and 'teleios' (perfect, complete), meaning 'all-perfect' or 'completely perfect'"
  },
  { 
    name: "Kevin",
    origin: "Wales",
    meaning: "From the Irish Gaelic name Caoimhín, derived from 'caomh' (gentle, kind, noble) and the suffix '-ín', meaning 'handsome birth', 'noble birth', or 'kindly one'"
  },
  { 
    name: "James",
    origin: "UK",
    meaning: "English form of the Hebrew name Ya'aqov (Jacob), traditionally understood as 'supplanter' or 'held by the heel'"
  },
  { 
    name: "Anthony",
    origin: "UK",
    meaning: "Roman origins from family name 'Antonius', meaning 'priceless' or 'invaluable', possibly derived from a Greek word meaning 'flower'"
  },
  { 
    name: "Sohebuzzaman",
    origin: "India",
    meaning: "Islamic name where 'Soheb' means 'companion/friend/master' and 'Uz Zaman' means 'glory of the age', combined meaning 'companion/master, glory of the age'"
  },
  { 
    name: "Narendra",
    origin: "India",
    meaning: "Sanskrit name where 'Nara' means 'man' and 'indra' is the king of gods in Hindu mythology, meaning 'leader of men' or 'ruler of mankind'"
  },
  { 
    name: "Sophie",
    origin: "UK",
    meaning: "From the Greek word 'sophia', meaning 'wisdom'"
  },
  { 
    name: "Alison",
    origin: "UK",
    meaning: "Medieval English diminutive of 'Alis', from Germanic 'Adalheidis' where 'Adal' means 'noble' and 'heid' means 'kind', meaning 'noble kind'"
  },
  { 
    name: "Diane",
    origin: "UK",
    meaning: "Derived from the Roman goddess Diana, related to Indo-European root meaning 'divine' or 'heavenly'"
  }
];

function App() {
  const [selectedName, setSelectedName] = useState<NameMeaning | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNames = namesList.filter(name => 
    name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    name.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          My Team - Name Meanings
        </h1>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search names or origins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNames.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedName(item)}
              className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-indigo-900 mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-2">Origin: {item.origin}</p>
              <p className="text-gray-600">Click to see meaning</p>
            </div>
          ))}
        </div>

        {selectedName && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-lg p-8 max-w-md w-full transform transition-all duration-300 animate-fade-in"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-indigo-900">{selectedName.name}</h2>
                  <p className="text-gray-600 mt-1">Origin: {selectedName.origin}</p>
                </div>
                <button
                  onClick={() => setSelectedName(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-xl text-gray-700 mt-4">{selectedName.meaning}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;