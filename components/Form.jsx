import React from 'react'
import Link from 'next/link'

const Form = ({type, raffle, setRaffle, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="text_gradient">{type} your raffle</span>
      </h1>
      <p className="desc text-start">
        Add a name, description and chose a draw date for your raffle.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="raffle-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Raffle name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={raffle.name}
                  onChange={(e) =>
                    setRaffle({ ...raffle, name: e.target.value })
                  }
                  placeholder="Give your raffle a name..."
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  value={raffle.description}
                  onChange={(e) =>
                    setRaffle({ ...raffle, description: e.target.value })
                  }
                  required
                  placeholder="Write your description about the raffle here..."
                  className="block w-1/2 resize-none rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="draw-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select a date
              </label>
              <div className="mt-2">
                <input
                  value={raffle.drawDate.toISOString().slice(0,16)}
                  type="datetime-local"
                  onChange={(e) =>
                    setRaffle({ ...raffle, drawDate: new Date(e.target.value) })
                  }
                  required
                  className="block w-1/2 rounded-md border-0 py-1.5 px-3 hover:cursor-pointer text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="flex justify-end mx-4 mb-5 mt-5 gap-4 w-spacing-large">
                <Link href="/" className="transp_btn">
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={submitting}
                  className="pink_btn px-5 py-1.5"
                >
                  {submitting ? `${type}...` : type}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form