import * as Dialog from '@radix-ui/react-dialog';
import { FaBabyCarriage, FaCarAlt, FaCreditCard, FaLaptopHouse, FaStore, FaSubway, FaSuitcaseRolling, FaWarehouse, FaWindowClose } from 'react-icons/fa';
import Select from 'react-select';

export default function Modal(){

  const options = [
    { value: <FaCreditCard/>, label: <FaCreditCard/> },
    { value: <FaBabyCarriage/>, label: <FaBabyCarriage/> },
    { value: <FaCarAlt/>, label: <FaCarAlt/> },
    { value: <FaLaptopHouse/>, label: <FaLaptopHouse/> },
    { value: <FaWarehouse/>, label: <FaWarehouse/> },
    { value: <FaStore/>, label: <FaStore/> },
    { value: <FaSubway/>, label: <FaSubway/> },
    { value: <FaSuitcaseRolling/>, label: <FaSuitcaseRolling/> },
  ]

  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
        Group add
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Add new finance especific group
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Separate your finances according to your needs.
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="title">
            Title
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="title"
            placeholder="Ex.: House Bills, New Car or Credit Card"
            required
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="description">
            Description
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="description"
            placeholder="What I wanna pay with this money?"
            required
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="icon">
            Icon
          </label>
          <Select
            placeholder="Select Option"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <FaWindowClose />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
}