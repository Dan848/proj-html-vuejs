<template>
    <HeroSection :obj="store.heroSection" />
    <AboutSection />
    <BridgeSection />
    <PortfolioSection />
    <ProcessSection />
    <TeamSection />
    <SponsorSection />
    <ContactSection />
</template>

<script>
  import { store } from "../data/store";
  import HeroSection from './Main/HeroSection.vue';
  import AboutSection from "./Main/AboutSection.vue";
  import BridgeSection from "./Main/BridgeSection.vue";
  import PortfolioSection from "./Main/PortfolioSection.vue";
  import ProcessSection from "./Main/ProcessSection.vue";
  import TeamSection from "./Main/TeamSection.vue";
  import SponsorSection from "./Main/SponsorSection.vue";
  import ContactSection from "./Main/ContactSection.vue";
  export default {
    name: "AppMain",
    components: {
        HeroSection,
        AboutSection,
        BridgeSection,
        PortfolioSection,
        ProcessSection,
        TeamSection,
        SponsorSection,
        ContactSection
    },

    data() {
      return {
        store,
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>