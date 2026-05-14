import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Maximize2, Tag, Search, Filter, Phone, MessageSquare } from 'lucide-react';
import { Property, PropertyType } from '../types/property';
import { mockProperties } from '../data/mockProperties';

export default function FeaturedListings() {
  const [filterType, setFilterType] = useState<PropertyType | 'All'>('All');
  const [filterCounty, setFilterCounty] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [searchQuery, setSearchQuery] = useState('');

  const counties = useMemo(() => {
    const uniqueCounties = Array.from(new Set(mockProperties.map(p => p.county)));
    return ['All', ...uniqueCounties];
  }, []);

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(p => {
      const matchesType = filterType === 'All' || p.type === filterType;
      const matchesCounty = filterCounty === 'All' || p.county === filterCounty;
      const matchesPrice = p.price <= maxPrice;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesCounty && matchesPrice && matchesSearch;
    });
  }, [filterType, filterCounty, maxPrice, searchQuery]);

  return (
    <section id="featured-listings" className="py-20 bg-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-bright font-bold uppercase tracking-wider mb-2 block"
          >
            Curated Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-4"
          >
            Featured Listings
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our most sought-after properties across Kenya. From fertile agricultural land to prime commercial spaces.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mb-12 glass-card p-6 border-none shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Area or project name..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Property Type</label>
              <select 
                className="w-full px-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as any)}
              >
                <option value="All">All Types</option>
                <option value="Land">Land / Plots</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* County Filter */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">County</label>
              <select 
                className="w-full px-4 py-2 bg-white border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-bright outline-none transition-all"
                value={filterCounty}
                onChange={(e) => setFilterCounty(e.target.value)}
              >
                {counties.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-500 uppercase block">Max Price</label>
                <span className="text-xs font-bold text-primary-deep">KES {maxPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10000000" 
                step="500000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-bright"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-50"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.images[0]} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-primary-deep text-white text-xs font-bold rounded-full">
                      {property.type}
                    </span>
                    <span className="px-3 py-1 bg-primary-bright text-white text-xs font-bold rounded-full">
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl flex justify-between items-center shadow-lg">
                      <span className="text-primary-deep font-bold text-lg">
                        KES {property.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-primary-bright" />
                    <span>{property.location}, {property.county}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-deep mb-3 h-14 line-clamp-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-4">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600">{property.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-5 h-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-600">Land Title Included</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="btn-primary py-2 text-sm">
                      View Details
                    </button>
                    <a 
                      href={`https://wa.me/254757728585?text=I am interested in ${property.title}`}
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
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400">No properties match your criteria</h3>
            <button 
              onClick={() => {
                setFilterType('All');
                setFilterCounty('All');
                setMaxPrice(10000000);
                setSearchQuery('');
              }}
              className="text-primary-bright font-bold mt-4 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
