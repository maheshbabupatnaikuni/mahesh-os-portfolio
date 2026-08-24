import type { ComponentType } from 'react'
import type { Project } from '../data/projects'

export type ProjectDemoProps = { project: Project }
export type ProjectDemoLoader = () => Promise<{ default: ComponentType<ProjectDemoProps> }>

const demoLoaders: Record<string, ProjectDemoLoader | undefined> = {}

export const getProjectDemoLoader = (slug: string) => demoLoaders[slug]
