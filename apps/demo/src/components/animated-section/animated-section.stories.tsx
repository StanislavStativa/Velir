import { Meta, StoryObj } from '@storybook/react';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { Default as AnimatedSection } from '@/components/animated-section/AnimatedSection.dev';

export default {
  title: 'Components/Animated Section',
  component: AnimatedSection,
  tags: ['autodocs'],
} as Meta<typeof AnimatedSection>;

type Story = StoryObj<typeof AnimatedSection>;

export const Default: Story = {
  render: () => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-24">
          <AnimatedSection>
            <h1 className="mb-8 text-center text-4xl font-bold">Welcome to Our Website</h1>
            <p className="text-center text-xl">Scroll down to see more animated sections!</p>
          </AnimatedSection>

          <AnimatedSection direction="left" className="rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Web Development</li>
              <li>Mobile App Design</li>
              <li>UI/UX Consulting</li>
              <li>Cloud Solutions</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" className="rounded-lg bg-blue-500 p-6 text-white">
            <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
            <p>
              We are a team of passionate developers and designers, dedicated to creating amazing
              digital experiences for our clients.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="down" className="rounded-lg bg-green-500 p-6 text-white">
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p>Get in touch with us for your next project!</p>
            <button className="mt-4 rounded bg-white px-4 py-2 font-semibold text-green-500 transition duration-300 hover:bg-green-100">
              Send a Message
            </button>
          </AnimatedSection>

          <AnimatedSection direction="up" className="rounded-lg bg-purple-500 p-6 text-white">
            <h2 className="mb-4 text-2xl font-semibold">Our Portfolio</h2>
            <p>Check out some of our amazing projects!</p>
            <button className="mt-4 rounded bg-white px-4 py-2 font-semibold text-purple-500 transition duration-300 hover:bg-purple-100">
              View Portfolio
            </button>
          </AnimatedSection>
        </div>
      </div>
    </ContainerFullWidth>
  ),
};
