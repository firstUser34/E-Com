import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, ExternalLink } from 'lucide-react';

// Assuming these components are available in your project
// If not, you'll need to create or import them from a UI library
const Input = ({ placeholder, value, onChange, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`border rounded px-2 py-1 ${className}`}
  />
);

const Button = ({ children, variant, size, onClick }) => (
  <button
    onClick={onClick}
    className={`${variant === 'outline' ? 'border border-green-500 text-green-500' : 'bg-green-500 text-white'} 
                ${size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2'} 
                rounded hover:opacity-80 transition-opacity`}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="border-b p-4">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const Tabs = ({ children, defaultValue, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(activeTab);
    }
  }, [activeTab, onValueChange]);

  return (
    <div className="space-y-4">
      {React.Children.map(children, (child) => {
        if (child.type === TabsList || child.type === TabsContent) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex space-x-2 border-b">
    {React.Children.map(children, (child) => 
      React.cloneElement(child, { isActive: child.props.value === activeTab, onClick: () => setActiveTab(child.props.value) })
    )}
  </div>
);

const TabsTrigger = ({ children, value, isActive, onClick }) => (
  <button
    className={`px-4 py-2 ${isActive ? 'border-b-2 border-green-500 font-semibold' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) => (
  activeTab === value ? children : null
);

const Map = ({ stores }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      const bounds = L.latLngBounds(stores.map(store => store.coordinates));
      map.fitBounds(bounds);
    }
  }, [map, stores]);

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer 
      center={[19.0760, 72.8777]} 
      zoom={11} 
      style={{ height: '100%', width: '100%' }}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stores.map(store => (
        <Marker key={store.id} position={store.coordinates} icon={customIcon}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

const EcoFriendlyLearningPage = () => {
  const [videoSearch, setVideoSearch] = useState('');
  const [storeSearch, setStoreSearch] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = [
    { id: 1, title: "Zero Waste Lifestyle Tips", videoId: "dQw4w9WgXcQ", description: "Learn how to reduce your waste and live a more sustainable life." },
    { id: 2, title: "Solar-Powered Gadgets Review", videoId: "dQw4w9WgXcQ", description: "Discover the latest in solar-powered technology for everyday use." },
    { id: 3, title: "Eco-Friendly Home Makeover", videoId: "dQw4w9WgXcQ", description: "Transform your home with sustainable materials and energy-efficient solutions." },
  ];

  const stores = [
    { id: 1, name: "Green Grocers", type: "Organic Groceries", location: "Bandra, Mumbai", website: "https://example.com", coordinates: [19.0596, 72.8295] },
    { id: 2, name: "EcoWare", type: "Recycled Goods", location: "Andheri, Mumbai", website: "https://example.com", coordinates: [19.1136, 72.8697] },
    { id: 3, name: "Sustainable Living NGO", type: "Plastic Reduction NGO", location: "Colaba, Mumbai", website: "https://example.com", coordinates: [18.9067, 72.8147] },
  ];

  const aiTools = [
    { id: 1, name: "EcoTrack AI", description: "AI-powered carbon footprint analyzer and reduction planner.", website: "https://example.com" },
    { id: 2, name: "GreenChoice", description: "AI tool for comparing product sustainability and suggesting eco-friendly alternatives.", website: "https://example.com" },
    { id: 3, name: "SmartWaste", description: "AI-driven waste management system for businesses and municipalities.", website: "https://example.com" },
  ];

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(videoSearch.toLowerCase()) ||
    video.description.toLowerCase().includes(videoSearch.toLowerCase())
  );

  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(storeSearch.toLowerCase()) ||
    store.type.toLowerCase().includes(storeSearch.toLowerCase()) ||
    store.location.toLowerCase().includes(storeSearch.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-green-700">EcoSattva</h1>
      </header>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8 text-center text-green-800"
      >
        Eco-Friendly Learning Hub
      </motion.h2>

      <Tabs defaultValue="videos" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="videos">Eco-Friendly Videos</TabsTrigger>
          <TabsTrigger value="stores">Nearby Eco-Friendly Stores & NGOs</TabsTrigger>
          <TabsTrigger value="ai">AI Tools for Eco-Friendly Ideologies</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="videos">
              <Card>
                <CardHeader>
                  <CardTitle>Learn from Eco Experts</CardTitle>
                  <CardDescription>Explore curated videos on sustainable living and eco-friendly products.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Input
                      placeholder="Search videos..."
                      value={videoSearch}
                      onChange={(e) => setVideoSearch(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredVideos.map(video => (
                      <motion.div key={video.id} layout>
                        <Card>
                          <CardContent>
                            {isClient && (
                              <YouTube
                                videoId={video.videoId}
                                opts={{
                                  width: '100%',
                                  height: '200',
                                  playerVars: {
                                    autoplay: 0,
                                    modestbranding: 1,
                                    rel: 0,
                                  },
                                }}
                              />
                            )}
                            <h3 className="font-semibold mb-1 mt-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{video.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stores">
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Eco-Friendly Stores & NGOs</CardTitle>
                  <CardDescription>Discover sustainable businesses and organizations in Mumbai.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Input
                      placeholder="Search stores or NGOs..."
                      value={storeSearch}
                      onChange={(e) => setStoreSearch(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-[400px] rounded-lg overflow-hidden">
                      {isClient && <Map stores={filteredStores} />}
                    </div>
                    <div className="space-y-4">
                      {filteredStores.map(store => (
                        <motion.div key={store.id} layout>
                          <Card>
                            <CardContent>
                              <h3 className="font-semibold mb-1">{store.name}</h3>
                              <p className="text-sm text-gray-600 mb-1">{store.type}</p>
                              <p className="text-sm text-gray-600 mb-2">
                                <MapPin className="w-4 h-4 inline-block mr-1" /> {store.location}
                              </p>
                              <Button variant="outline" size="sm" onClick={() => window.open(store.website, '_blank')}>
                                <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardHeader>
                  <CardTitle>AI Tools for Eco-Friendly Ideologies</CardTitle>
                  <CardDescription>Explore AI-powered solutions for sustainable living and decision-making.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {aiTools.map(tool => (
                      <motion.div key={tool.id} layout>
                        <Card>
                          <CardContent>
                            <h3 className="font-semibold mb-1">{tool.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                            <Button variant="outline" size="sm" onClick={() => window.open(tool.website, '_blank')}>
                              <ExternalLink className="w-4 h-4 mr-2" /> Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default EcoFriendlyLearningPage;