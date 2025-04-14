import React from 'react';

function KitchenSink() {
  return (
    <div className="space-y-6 p-6">
      {/* Typography */}
      <section>
        <h1 className="text-4xl font-bold">Typography</h1>
        <p className="text-base text-gray-700">This is a standard paragraph.</p>
        <p className="text-sm text-gray-500">This is smaller text for captions.</p>
        <button className="text-blue-500 underline">This is a link</button>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-3xl font-semibold">Buttons</h2>
        <div className="flex space-x-4">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Primary Button
          </button>
          <button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
            Secondary Button
          </button>
          <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Danger Button
          </button>
        </div>
      </section>

      {/* Forms */}
      <section>
        <h2 className="text-3xl font-semibold">Forms</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Text Input"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:ring focus:ring-blue-300"
          />
          <select className="w-full rounded border border-gray-300 px-4 py-2">
            <option>Select Option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <textarea
            placeholder="Textarea"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:ring focus:ring-blue-300"
          ></textarea>
        </form>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-3xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-300 p-4 shadow">
            <h3 className="text-xl font-medium">Card Title</h3>
            <p className="text-gray-600">This is a description of the card.</p>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 shadow">
            <h3 className="text-xl font-medium">Card Title</h3>
            <p className="text-gray-600">This is a description of the card.</p>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 shadow">
            <h3 className="text-xl font-medium">Card Title</h3>
            <p className="text-gray-600">This is a description of the card.</p>
          </div>
        </div>
      </section>
      <div className="min-h-screen space-y-12 bg-gray-50 p-6">
        {/* Typography */}
        <section>
          <h1 className="text-4xl font-bold">Typography</h1>
          <p className="text-base text-gray-700">This is a standard paragraph.</p>
          <p className="text-sm italic text-gray-500">This is smaller italic text.</p>
          <p className="text-xs uppercase tracking-widest text-blue-500">
            Uppercase tracking-widest
          </p>
          <p className="font-light text-gray-600">Font weight light</p>
          <p className="font-bold text-gray-900">Font weight bold</p>
        </section>

        {/* Layout */}
        <section>
          <h2 className="text-3xl font-semibold">Layout</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 bg-blue-100 p-4">Grid Column 1</div>
            <div className="col-span-1 bg-blue-200 p-4">Grid Column 2</div>
          </div>
          <div className="mt-4 flex space-x-4">
            <div className="flex-1 bg-red-100 p-4">Flex Item 1</div>
            <div className="flex-1 bg-red-200 p-4">Flex Item 2</div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-3xl font-semibold">Spacing</h2>
          <div className="space-y-4">
            <div className="bg-green-100 p-4">Padding 4</div>
            <div className="m-4 bg-green-200 p-4">Margin 4</div>
            <div className="bg-green-300 p-8">Padding 8</div>
          </div>
        </section>

        {/* Borders */}
        <section>
          <h2 className="text-3xl font-semibold">Borders</h2>
          <div className="flex space-x-4">
            <div className="border border-gray-300 p-4">Border</div>
            <div className="border-2 border-blue-500 p-4">Border 2</div>
            <div className="rounded-lg border border-red-500 p-4">Rounded Border</div>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-3xl font-semibold">Colors</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-red-100 p-4">Red 100</div>
            <div className="bg-green-100 p-4">Green 100</div>
            <div className="bg-blue-100 p-4">Blue 100</div>
            <div className="bg-yellow-100 p-4">Yellow 100</div>
            <div className="bg-gray-100 p-4">Gray 100</div>
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-3xl font-semibold">Shadows</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 shadow">Shadow</div>
            <div className="bg-white p-4 shadow-md">Shadow Medium</div>
            <div className="bg-white p-4 shadow-lg">Shadow Large</div>
          </div>
        </section>

        {/* Effects */}
        <section>
          <h2 className="text-3xl font-semibold">Effects</h2>
          <button className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300">
            Hover and Focus
          </button>
        </section>

        {/* Transforms */}
        <section>
          <h2 className="text-3xl font-semibold">Transforms</h2>
          <div className="transform bg-blue-200 p-4 transition-transform hover:scale-110">
            Hover to Scale
          </div>
        </section>

        {/* Flexbox & Grid */}
        <section>
          <h2 className="text-3xl font-semibold">Flexbox & Grid</h2>
          <div className="flex space-x-4">
            <div className="flex-1 bg-purple-100 p-4">Flex 1</div>
            <div className="flex-2 bg-purple-200 p-4">Flex 2</div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-yellow-100 p-4">Grid 1</div>
            <div className="col-span-2 bg-yellow-200 p-4">Grid 2</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default {
  title: 'Design System/Kitchen Sink',
  component: KitchenSink,
  tags: ['autodocs'],
};

export const fontSize = {};
