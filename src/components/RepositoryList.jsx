import { RepositoryItem } from "./RepositoryItem"

const repository = {
	name: 'unform1',
	description: 'Forms in react',
	link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>
			
			<ul>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
			</ul>
		</section>
	)
}