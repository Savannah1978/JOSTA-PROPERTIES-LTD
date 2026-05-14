import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BedDouble, Tag, Search, Filter, MessageSquare, Calendar, Users, X, Info } from 'lucide-react';
import { Property } from '../types/property';
import { mockProperties } from '../data/mockProperties';

export default function AccommodationSection() {
  const [filterType, setFilterType] = useState<string>('All');
  const [filterCounty, setFilterCounty] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(20000);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingProperty, setBookingProperty] = useState<Property | null>(null);

  const accommodations = useMemo(() => {
    return mockProperties.filter(p => p.type === 'Accommodation');
  }, []);

  const counties = useMemo(() => {
    const uniqueCounties = Array.from(new Set(accommodations.map(p => p.county)));
    return ['All', ...uniqueCounties];
  }, [accommodations]);

  const accTypes = ['All', 'Airbnb', 'Hotel', 'Guest House', 'Vacation Home'];

  const filtered = useMemo(() => {
    return accommodations.filter(p => {
      const matchesType = filterType === 'All' || p.accommodationType === filterType;
      const matchesCounty = filterCounty === 'All' || p.county === filterCounty;
      const matchesPrice = p.price <= maxPrice;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesCounty && matchesPrice && matchesSearch;
    });
  }, [accommodations, filterType, filterCounty, maxPrice, searchQuery]);

  return (
    <section id="accommodation" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-bright font-bold uppercase tracking-wider mb-2 block"
          >
            Stay With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-4"
          >
            Premium Accommodations
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Book verified Airbnb apartments, hotels, and vacation homes across Kenya through Josta Properties.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mb-12 glass-card p-6 border-none shadow-sm bg-accent/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Where are you going?"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Stay Type</label>
              <select 
                className="w-full px-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {accTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">County</label>
              <select 
                className="w-full px-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none"
                value={filterCounty}
                onChange={(e) => setFilterCounty(e.target.value)}
              >
                {counties.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-500 uppercase block">Max Price / Night</label>
                <span className="text-xs font-bold text-primary-deep">KES {maxPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-bright"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-50"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-deep shadow-lg">
                    {property.accommodationType}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                    <MapPin className="w-3 h-3 text-primary-bright" />
                    <span>{property.location}, {property.county}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-deep mb-3 h-14 line-clamp-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                      <BedDouble className="w-4 h-4" />
                      <span>{property.rooms} Rooms</span>
                    </div>
                    <div className="text-primary-bright font-bold">
                       KES {property.price.toLocaleString()} <span className="text-xs text-gray-400 font-normal">/ night</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => setBookingProperty(property)}
                      className="btn-primary py-2 text-sm"
                    >
                      Book Now
                    </button>
                    <a 
                      href={`https://wa.me/254757728585?text=I would like to book ${property.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 text-sm bg-green-600 hover:bg-green-700"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Inquire
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-accent rounded-3xl">
            <h3 className="text-xl font-bold text-gray-400">No accommodations found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Booking Modal */}
        <AnimatePresence>
          {bookingProperty && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setBookingProperty(null)}
                className="absolute inset-0 bg-primary-deep/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                <div className="p-6 bg-primary-deep text-white flex justify-between items-center">
                  <h3 className="text-xl font-bold">Stay Reservation</h3>
                  <button onClick={() => setBookingProperty(null)} className="p-2 hover:bg-white/10 rounded-lg">
                    <X />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8">
                  <div className="flex gap-4 mb-8 p-4 bg-accent rounded-2xl">
                    <img src={bookingProperty.images[0]} className="w-24 h-24 rounded-xl object-cover shadow-sm" alt="" />
                    <div>
                      <h4 className="font-bold text-primary-deep leading-tight mb-1">{bookingProperty.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{bookingProperty.location}</p>
                      <span className="text-primary-bright font-bold">KES {bookingProperty.price.toLocaleString()} / night</span>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Check-In Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input type="date" className="w-full pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Check-Out Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input type="date" className="w-full pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Number of Guests</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input type="number" min="1" className="w-full pl-10 pr-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email</label>
                        <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Phone Number</label>
                        <input type="tel" placeholder="+254 7..." className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-primary-bright transition-all" />
                      </div>
                    </div>

                    <button type="button" className="btn-primary w-full py-4 text-lg mt-4 shadow-xl">
                      Confirm Booking Inquiry
                    </button>
                    <p className="text-center text-gray-400 text-xs">
                      <Info className="w-3 h-3 inline mr-1" />
                      Our team will contact you within 30 minutes to confirm availability and payment.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
