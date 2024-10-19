/* eslint-disable react/prop-types */
import { Component } from "react";
import ProjectList from "../ProjectList/ProjectList";
import ToolBar from "../Toolbar/ToolBar";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                "All",
                "Websites",
                "Flayers",
                "Business Cards"],
                selected: "All",
                projects: props.projects
        }
    }

    handleSelectedFilter = (filter) => {
        this.setState({ selected: filter });
    }
    render() {
        const filteredProjects = this.state.projects.filter((project) => {
            if (this.state.selected === "All") { 
                return true;
            }
            return project.category === this.state.selected;
        });
        return (
            <div className="Main">
                <div className="ToolBar"><ToolBar
                    filters={this.state.filters} 
                    selected={this.state.selected} 
                    onSelectedFilter={this.handleSelectedFilter} 
                    /></div>
                <><ProjectList
                    projects={filteredProjects} 
                    /></>
            </div>
        );
    }
}

export default Portfolio;