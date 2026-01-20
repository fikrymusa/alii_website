const SidebarProfile = ({ isOpen }) => {
  return (
    <div className="p-4 border-t border-white/20">
      {isOpen ? (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/30 rounded-full" />
          <div>
            <p className="text-sm font-medium">User Name</p>
            <p className="text-xs opacity-70">Prodi</p>
          </div>
        </div>
      ) : (
        <div className="w-8 h-8 bg-white/30 rounded-full" />
      )}
    </div>
  );
};

export default SidebarProfile;
