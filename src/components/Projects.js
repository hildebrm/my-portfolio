import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/hildebrm/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

return (
    <div class='projList'>
        <ul>
            {repositories.map(repo => (
                <div class="gitProjects">
                <p key={repo.id}>
                    <h1><a class='blue' href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h1>
                    <h3>{repo.description}</h3>
                    <p>Language: {repo.language}</p>
                </p>
                </div>
            ))}
        </ul>
    </div>
);
};

export default Projects;
