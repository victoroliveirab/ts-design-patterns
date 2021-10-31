export default {
  printWithTime: (content: unknown) => {
    const [time] = new Date().toTimeString().split(' ');
    console.log(`[${time}] - ${content}`);
  },
  generateId: (max?: number) => Math.ceil(Math.random() * (max || 1000)),
};
