

// eslint-disable-next-line no-unused-vars
const SectionTitle = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-2 mb-6 mt-2">
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
            <Icon size={18} />
        </div>
        <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
    </div>
);

export default SectionTitle;
