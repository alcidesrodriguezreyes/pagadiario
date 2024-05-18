import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
    title: 'UI/Calendar',
    component: Calendar,
  };
  
  export default meta;
  type Story = StoryObj<typeof Calendar>;

  export const Default: Story = {
    render: () => {
      const [date, setDate] = useState<Date | undefined>(new Date())

      return (
        <>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </>
      );
    }
  };