import Counter from '../components/Counter';

export default {
  title: 'Counter',
  component: Counter,
};

export const DefaultCounter = {
  // render: () => <Counter value={1}/>
  args: {
    value: 1,
  },
};
