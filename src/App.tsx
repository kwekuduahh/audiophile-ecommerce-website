import { Label } from './Components/ui/label'
import { RadioGroup, RadioGroupItem } from './Components/ui/radio-group'
import './index.css'


function App() {

  return (
    <>
      <div className="w-full h-screen bg-pureWhite">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  )
}

export default App
