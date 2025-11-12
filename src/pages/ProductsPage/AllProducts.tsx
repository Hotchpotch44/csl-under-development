import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Search, Filter, Star } from "lucide-react";

import DepartmentData from "../../components/data/sayed/departments.json";
import CategoryData from "../../components/data/sayed/categories.json";
import SubCategoryData from "../../components/data/sayed/sub_categories.json";
import ProductsData from "../../components/data/sayed/products.json";
import DynamicHeroSection from "../../components/Common/DynamicHeroSection";

export default function AllProducts() {
    const departments = DepartmentData.departments;
    const categories = CategoryData.categories;
    const subCategories = SubCategoryData.sub_categories;
    const products = ProductsData.products;

    const [selectedDept, setDept] = useState<number | null>(null);
    const [selectedCat, setCat] = useState<number | null>(null);
    const [selectedSub, setSub] = useState<number | null>(null);
    const [currentPage, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCats = categories.filter((c) => c.departmentId === selectedDept);
    const filteredSubs = subCategories.filter((sc) => sc.categoryId === selectedCat);

    const filteredProducts = useMemo(() => {
        let result = products;

        if (selectedSub) result = result.filter((p) => p.subCategoryId === selectedSub);
        else if (selectedCat) result = result.filter((p) => p.categoryId === selectedCat);
        else if (selectedDept) result = result.filter((p) => p.departmentId === selectedDept);

        if (searchQuery) {
            result = result.filter((p) =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [selectedDept, selectedCat, selectedSub, products, searchQuery]);

    const itemsPerPage = 12;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
       


                {/* Hero Section */}
                <DynamicHeroSection
                    title="Our Products"
                    subtitle="High-quality chemical solutions for every industry"
                />



            <div className="md:flex relative w-full">
                <aside className=" md:w-[22vw] ml-[2vw] mt-[1.3vw] rounded md:rounded-2xl bg-white top-[35vh] left-0 md:h-[65vh] overflow-y-auto z-30 shadow-xl">
                    <div className="p-[1.5vw] border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white  top-0 z-10">
                        <div className="flex items-center gap-[4vw] md:gap-[0.8vw]">
                            <Filter className="md:w-[1.5vw] md:h-[1.5vw] h-[5vw] w-[5vw] text-(--secondary)" />
                            <h2 className="md:text-[1.5vw] font-bold text-slate-800">
                                Filter Products
                            </h2>
                        </div>
                    </div>

                    <div className="p-[1.2vw] md:space-y-[0.5vw] space-y-[1vw]">
                        {departments.map((dep) => (
                            <div className="bg-(--primary)/20 md:p-[0.5vw] p-[1vw] md:rounded-2xl rounded" key={dep.id}>
                                <button
                                    onClick={() => {
                                        const same = dep.id === selectedDept;
                                        setDept(same ? null : dep.id);
                                        setCat(null);
                                        setSub(null);
                                        setPage(1);
                                    }}
                                    className={`flex w-full border items-center justify-between py-[0.8vw] px-[1vw] rounded-lg transition-all duration-300 text-[clamp(0.85rem,1vw,0.95rem)] font-medium ${dep.id === selectedDept
                                        ? "bg-(--primary) text-white shadow-md"
                                        : "text-slate-700 hover:bg-slate-100"
                                        }`}
                                >
                                    <span>{dep.id}- {dep.name}</span>
                                    {dep.id === selectedDept ? (
                                        <ChevronDown className="md:w-[1.2vw] md:h-[1.2vw] h-[4vw] w-[4vw]" />
                                    ) : (
                                        <ChevronRight className="md:w-[1.2vw] md:h-[1.2vw] h-[4vw] w-[4vw]" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {selectedDept === dep.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="ml-[1vw] mt-[0.4vw] md:space-y-[0.3vw] space-y-[1vw] overflow-hidden"
                                        >
                                            {filteredCats.map((cat) => {
                                                const hasSubs = subCategories.some(
                                                    (s) => s.categoryId === cat.id
                                                );

                                                return (
                                                    <div key={cat.id}>
                                                        <button
                                                            onClick={() => {
                                                                const same = cat.id === selectedCat;
                                                                setCat(same ? null : cat.id);
                                                                setSub(null);
                                                                setPage(1);
                                                            }}
                                                            className={`flex w-full border items-center justify-between py-[0.6vw] px-[0.8vw] rounded-md transition-all duration-300 text-[clamp(0.8rem,0.9vw,0.9rem)] ${cat.id === selectedCat
                                                                ? "bg-(--secondary) text-white shadow-sm"
                                                                : "text-slate-600 hover:bg-slate-50"
                                                                }`}
                                                        >
                                                            <span>{cat.name}</span>
                                                            {hasSubs &&
                                                                (cat.id === selectedCat ? (
                                                                    <ChevronDown className="md:w-[1vw] md:h-[1vw] h-[3vw] w-[3vw]" />
                                                                ) : (
                                                                    <ChevronRight className="md:w-[1vw] md:h-[1vw] h-[3vw] w-[3vw]" />
                                                                ))}
                                                        </button>

                                                        <AnimatePresence>
                                                            {selectedCat === cat.id && hasSubs && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="ml-[1vw] mt-[0.3vw] space-y-[0.2vw] overflow-hidden"
                                                                >
                                                                    {filteredSubs.map((sub) => (
                                                                        <button
                                                                            key={sub.id}
                                                                            onClick={() => {
                                                                                setSub(sub.id === selectedSub ? null : sub.id);
                                                                                setPage(1);
                                                                            }}
                                                                            className={`block w-full border text-left py-[0.5vw] px-[0.7vw] rounded-md transition-all duration-300 text-[clamp(0.75rem,0.85vw,0.85rem)] ${sub.id === selectedSub
                                                                                ? "bg-(--secondary) text-white shadow-sm"
                                                                                : "text-slate-500 hover:bg-slate-50"
                                                                                }`}
                                                                        >
                                                                            {sub.name}
                                                                        </button>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </aside>

                <main className="flex-1 px-[3vw] py-[3vh]">
                    <div className="mb-[3vh] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[2vh] bg-white p-[2vw] rounded-xl shadow-sm border border-slate-200">
                        <div className="relative flex-1 md:max-w-[40vw] w-full">
                            <Search className="absolute left-[1vw] top-1/2 -translate-y-1/2 md:w-[1.2vw] md:h-[1.2vw] w-[4vw] h-[4vw] text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setPage(1);
                                }}
                                className="w-full md:pl-[3vw] pl-[10vw] pr-[1vw] md:py-[0.8vw] py-[2vw] border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all text-[clamp(0.85rem,1vw,0.95rem)]"
                            />
                        </div>

                        <div className="flex items-center md:gap-[1.5vw] gap-[8vw]">
                            <p className="text-[clamp(0.8rem,0.95vw,0.9rem)] text-slate-600">
                                <span className="font-semibold text-slate-800">
                                    {filteredProducts.length === 0
                                        ? 0
                                        : startIndex + 1}
                                    –
                                    {Math.min(startIndex + itemsPerPage, filteredProducts.length)}
                                </span>
                                {" products showing "}of{" "}
                                <span className="font-semibold text-slate-800">
                                    {filteredProducts.length} {"products"}
                                </span>
                            </p>

                            {totalPages > 1 && (
                                <div className="flex items-center gap-[0.5vw]">
                                    <button
                                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-[1vw] py-[0.5vw] text-[clamp(0.8rem,0.9vw,0.85rem)] font-medium bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                    >
                                        Prev
                                    </button>
                                    <span className="text-[clamp(0.8rem,0.9vw,0.85rem)] font-semibold text-slate-700 px-[0.8vw]">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-[1vw] py-[0.5vw] text-[clamp(0.8rem,0.9vw,0.85rem)] font-medium bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-[10vh] text-center">
                            <div className="md:w-[8vw] md:h-[8vw] w-[12vw] h-[12vw] bg-slate-100 rounded-full flex items-center justify-center mb-[2vh]">
                                <Search className="md:w-[4vw] md:h-[4vw] h-[8vw] w-[8vw] text-slate-400" />
                            </div>
                            <p className="md:text-[2vw] text-4xl font-semibold text-slate-700 mb-[1vh]">
                                No products found
                            </p>
                            <p className="md:text-[1vw] text-slate-500">
                                Try adjusting your filters or search query
                            </p>
                        </div>
                    ) : (
                        // products card area
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1vw]">
                            {paginatedProducts.map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="border border-[var(--primary)]/20 bg-gradient-to-t from-[var(--primary)]/10 to-white p-[1vw] md:rounded-3xl rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                                >



                                    <div className='h-[2vw] mb-5 mt-[5vw] md:mt-0 relative flex items-center gap-[0.8vw]'>
                                        <div className='md:h-[2vw] md:w-[2vw] h-[10vw] w-[10vw] rounded-full bg-gradient-to-l from-[var(--primary)] to-[var(--muted)]' />
                                        <p className='md:text-[0.8vw] text-sm'>{product.name}</p>
                                    </div>
                                    {/* Image */}
                                    <div className="relative h-[30vh] bg-white rounded-4xl">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full rounded-4xl object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Rating Badge */}
                                        <div className="absolute top-[1vh] right-[1vw] bg-(--primary) rounded-full md:px-[0.5vw] md:py-[0.2vw] px-[2vw] py-[0.6vw] font-semibold flex items-center gap-1">
                                            <Star className="md:w-[0.6vw] md:h-[0.6vw] w-[4vw] h-[4vw] text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-[0.2vw]">
                                        <h3 className="md:text-[1.2vw] text-2xl font-semibold text-[var(--primary)] mb-2">{product.name}</h3>
                                        <p className="text-gray-600 md:text-[0.8vw] text-md leading-relaxed mb-4">{product.description}</p>

                                        {product.technicalData?.length > 0 && (
                                            <div className="mb-[1.5vh] p-[1vw]  rounded-lg border border-slate-200">
                                                <h4 className="md:text-[0.8vw] text-lg font-bold text-(--primary) mb-[0.8vh] uppercase tracking-wider">
                                                    Technical Specifications
                                                </h4>
                                                <ul className="space-y-[0.4vh]">
                                                    {product.technicalData.slice(0, 3).map((t) => (
                                                        <li
                                                            key={t.id}
                                                            className="text-[clamp(0.75rem,0.85vw,0.8rem)] text-slate-600 flex items-start"
                                                        >
                                                            <span className="inline-block md:w-[0.4vw] md:h-[0.4vw] w-[2vw] h-[2vw] bg-(--primary) rounded-full mr-[0.6vw] mt-[0.6vh] flex-shrink-0" />
                                                            <span>
                                                                <span className="font-semibold text-slate-700">{t.title}:</span>{" "}
                                                                {t.value}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {product.applications?.length > 0 && (
                                            <div className="mb-[1.5vh] p-[1vw] bg-gradient-to-br  rounded-lg border border-blue-100">
                                                <h4 className="md:text-[0.8vw] text-lg font-bold text-(--primary) mb-[0.8vh] uppercase tracking-wider">
                                                    Applications
                                                </h4>
                                                <ul className="space-y-[0.4vh]">
                                                    {product.applications.slice(0, 3).map((a, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-[clamp(0.75rem,0.85vw,0.8rem)] text-slate-700 flex items-start"
                                                        >
                                                            <span className="inline-block md:w-[0.4vw] md:h-[0.4vw] w-[2vw] h-[2vw] bg-(--primary) rounded-full mr-[0.6vw] mt-[0.6vh] flex-shrink-0" />
                                                            <span>{a}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {product.safetyInfo && (
                                            <div className="p-[1vw] bg-(--primary)/10 border border-amber-200 md:rounded-lg rounded">
                                                <p className="  flex items-center justify-center gap-[0.5vw]">
                                                    <span className="md:text-[1vw]">⚠️</span>
                                                    <span className="leading-relaxed md:text-[0.8vw] text-sm">{product.safetyInfo}</span>
                                                </p>
                                            </div>
                                        )}

                                        {/* Bottom Icons */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex space-x-2">
                                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                    </svg>
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                                    </svg>
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </motion.div>
                            ))}

                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
