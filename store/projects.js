import projectsData from "~/static/projects.json";

export const state = () => ({
    projects: [{ name: 'sdsds' }],
    isLoading: false
})

export const mutations = {
    setProjects(state, projects) {
        todo.projects = projects
    }
}

export const getters = {
    allProjects: (state) => state.projects
}


export const actions = {

    fetchProjects({ commit }) {
        alert(projectsData);
        commit('setProjects', projectsData);
    },
}