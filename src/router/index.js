import { createRouter, createWebHashHistory } from "vue-router";
import MyProfile from "@/views/MyProfile.vue";
import Skills from "@/views/Skills.vue";
import Projects from "@/views/Projects.vue";
import ProjectsDetail from "@/views/ProjectsDetail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: "/", 
      component: MyProfile 
    },
    {
      path:'/skills',
      component:Skills
    },
    {
      path:'/projects',
      component:Projects,
    },
    {
      path:'/projects/:id',
      component:ProjectsDetail
    }
  ]
});

export default router;
