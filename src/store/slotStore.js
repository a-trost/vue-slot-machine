import { ref } from "vue";

const numberOfWheels = ref(2);

// Items in slots
const slotItems = ref(new Array(numberOfWheels.value).fill(null));

const items = ref([
  "🐴",
  "🎠",
  // "🐎", "🏇", "❌"
]);

const selectItems = () => {
  for (let i = 0; i < numberOfWheels.value; i++) {
    const randomIndex = Math.floor(Math.random() * items.value.length);

    slotItems.value[i] = items.value[randomIndex];
  }
};

export default () => ({ slotItems, selectItems });
