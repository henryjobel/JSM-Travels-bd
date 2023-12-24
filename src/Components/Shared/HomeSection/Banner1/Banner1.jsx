

const Banner1 = () => {
    return (
        <div>
            <div className="flex items-center justify-center p-12">
    {/* <!-- Author: FormBold Team --> */}
    <div className="mx-auto w-full max-w-[550px] bg-white">
        <form>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                            From
                        </label>
                        <input type="text" name="fName" id="fName" placeholder="First Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                            TO
                        </label>
                        <input type="text" name="lName" id="lName" placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    How many person?
                </label>
                <input type="number" name="guest" id="guest" placeholder="5" min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                        Deprature Date 
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                        Returen Date <span>(optional)</span>
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                    Whats App
                </label>
                <input type="text" name="guest" id="guest" placeholder="+880190000000" min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Are you Sure to the event?
                </label>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                        <label  className="pl-3 text-base font-medium text-[#07074D]">
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                        <label  className="pl-3 text-base font-medium text-[#07074D]">
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>
        </div>
    );
};

export default Banner1;