import { Dialog, Transition } from "@headlessui/react";
import { Search, X } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function SearchBar() {
  let [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setIsOpen(false);
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="outline-none" onClick={handleOpen}>
        <Search className="h-5 w-5" />
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={handleClose} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-700"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div className="fixed inset-0">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="w-full bg-white px-10 md:px-20 py-10">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-5 border"
                >
                  <X className="h-5 w-5" />
                </button>
                <form onSubmit={handleSubmit}>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Search Something ...."
                    className="w-full outline-none placeholder:text-base placeholder:tracking-wide"
                  />
                </form>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default SearchBar;
