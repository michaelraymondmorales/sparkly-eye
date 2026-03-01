import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';

/**
 * MAIN ASSEMBLY
 */
export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        {/* 'flex-1' tells the grid to grow and fill the remaining height */}
        <div className="flex-1 relative flex flex-col">
            <ProjectGrid />
        </div>
    </div>
  );
}