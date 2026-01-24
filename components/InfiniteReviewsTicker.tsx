import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_MOCK } from '../src/data/googleReviewsMock';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className} fill="currentColor">
        <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" />
    </svg>
);

const InfiniteReviewsTicker: React.FC = () => {
    // Filter only 4+ stars just in case, though mock is mostly 5.
    const filteredReviews = GOOGLE_REVIEWS_MOCK.filter(r => r.rating >= 4);

    return (
        <div className="w-full overflow-hidden bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <GoogleIcon className="w-8 h-8 text-brand-dark" />
                    <span className="text-gray-900 font-bold text-xl">Reseñas en Google</span>
                </div>
                <p className="text-gray-500">Nuestros clientes hablan por nosotros.</p>
            </div>

            <div className="flex w-full overflow-hidden relative">
                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-6 px-3">
                    {/* Double the list to create seamless loop */}
                    {[...filteredReviews, ...filteredReviews, ...filteredReviews].map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow select-none"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.author_name}&background=random`
                                        }}
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{review.author_name}</h4>
                                        <span className="text-xs text-gray-400">{review.time}</span>
                                    </div>
                                </div>
                                <GoogleIcon className="w-5 h-5 text-gray-300" />
                            </div>

                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < review.rating ? 'fill-[#FBC02D] text-[#FBC02D]' : 'text-gray-200'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                {review.text ? `"${review.text}"` : <span className="italic text-gray-400">Calificación sin comentario</span>}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Gradient overlays to smooth edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </div>
    );
};

export default InfiniteReviewsTicker;
