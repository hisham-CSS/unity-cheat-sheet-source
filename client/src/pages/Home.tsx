import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Keyboard, Workflow, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Unity Cheat Sheet</h1>
              <p className="text-muted-foreground">For Interaction Designers Prototyping Interactive Experiences</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="hotkeys" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hotkeys" className="flex items-center gap-2">
              <Keyboard className="w-4 h-4" />
              Hotkeys
            </TabsTrigger>
            <TabsTrigger value="workflow" className="flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              Workflow
            </TabsTrigger>
            <TabsTrigger value="scripting" className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Scripting
            </TabsTrigger>
          </TabsList>

          {/* Hotkeys Tab */}
          <TabsContent value="hotkeys" className="space-y-6">
            <HotkeysSection />
          </TabsContent>

          {/* Workflow Tab */}
          <TabsContent value="workflow" className="space-y-6">
            <WorkflowSection />
          </TabsContent>

          {/* Scripting Tab */}
          <TabsContent value="scripting" className="space-y-6">
            <ScriptingSection />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-6">
        <div className="container text-center text-muted-foreground text-sm">
          <p>Unity Cheat Sheet for Interaction Designers • 2025</p>
        </div>
      </footer>
    </div>
  );
}

function HotkeysSection() {
  const hotkeyCategories = [
    {
      title: "Scene Tools",
      icon: "🛠️",
      shortcuts: [
        { key: "Q", action: "Pan" },
        { key: "W", action: "Move" },
        { key: "E", action: "Rotate" },
        { key: "R", action: "Scale" },
        { key: "T", action: "Rect Tool" },
        { key: "Z", action: "Pivot Mode Toggle" },
        { key: "X", action: "Pivot Rotation Toggle" },
        { key: "V", action: "Vertex Snap" },
      ],
    },
    {
      title: "GameObject",
      icon: "🎮",
      shortcuts: [
        { key: "Ctrl/Cmd+Shift+N", action: "New Empty GameObject" },
        { key: "Alt+Shift+N", action: "New Empty Child" },
        { key: "Ctrl/Cmd+Alt+F", action: "Move to View" },
        { key: "Ctrl/Cmd+Shift+F", action: "Align with View" },
        { key: "Shift+F", action: "Lock Camera to GameObject" },
      ],
    },
    {
      title: "Window Navigation",
      icon: "🪟",
      shortcuts: [
        { key: "Ctrl/Cmd+1", action: "Scene" },
        { key: "Ctrl/Cmd+2", action: "Game" },
        { key: "Ctrl/Cmd+3", action: "Inspector" },
        { key: "Ctrl/Cmd+4", action: "Hierarchy" },
        { key: "Ctrl/Cmd+5", action: "Project" },
        { key: "Ctrl/Cmd+6", action: "Animation" },
        { key: "Ctrl/Cmd+7", action: "Profiler" },
        { key: "Ctrl/Cmd+Shift+C", action: "Console" },
      ],
    },
    {
      title: "Edit Operations",
      icon: "✏️",
      shortcuts: [
        { key: "Ctrl/Cmd+Z", action: "Undo" },
        { key: "Ctrl+Y / Cmd+Shift+Z", action: "Redo" },
        { key: "Ctrl/Cmd+D", action: "Duplicate" },
        { key: "Ctrl/Cmd+C", action: "Copy" },
        { key: "Ctrl/Cmd+V", action: "Paste" },
        { key: "Shift+Del", action: "Delete" },
        { key: "F", action: "Frame Selection" },
        { key: "Ctrl/Cmd+A", action: "Select All" },
      ],
    },
    {
      title: "Playback",
      icon: "▶️",
      shortcuts: [
        { key: "Ctrl/Cmd+P", action: "Play" },
        { key: "Ctrl/Cmd+Shift+P", action: "Pause" },
        { key: "Ctrl/Cmd+Alt+P", action: "Step Frame" },
      ],
    },
    {
      title: "Animation",
      icon: "🎬",
      shortcuts: [
        { key: "Space", action: "Play Animation" },
        { key: "K", action: "Key Selected" },
        { key: "Shift+K", action: "Key Modified" },
        { key: "Period", action: "Next Frame" },
        { key: "Comma", action: "Previous Frame" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hotkeyCategories.map((category) => (
        <Card key={category.title} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {category.shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">
                    {shortcut.key}
                  </Badge>
                  <span className="text-sm text-muted-foreground text-right">{shortcut.action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function WorkflowSection() {
  const workflows = [
    {
      title: "Prototyping Approaches",
      description: "Choose the right prototyping strategy for your project",
      items: [
        {
          name: "Rapid Prototyping",
          desc: "Quick proof of concept to test requirements fast. May not go to production. Ideal for exploring multiple directions and quick pivots.",
        },
        {
          name: "Evolutionary Prototyping",
          desc: "Built with long-term production in mind. Systems are architected for scale from the start and refined throughout development.",
        },
      ],
    },
    {
      title: "Standard Development Pipeline",
      description: "The typical workflow for Unity projects",
      items: [
        { name: "1. Concept & Planning", desc: "Define requirements, scope, and goals" },
        { name: "2. Prototyping", desc: "Create quick prototypes to test core mechanics" },
        { name: "3. Asset Creation", desc: "Import/create 3D models, textures, audio, animations" },
        { name: "4. Scene Setup", desc: "Build environments, place GameObjects, configure lighting" },
        { name: "5. Scripting", desc: "Implement game logic, interactions, and behaviors" },
        { name: "6. Testing & Iteration", desc: "Playtest, debug, refine mechanics" },
        { name: "7. Polish & Optimization", desc: "Improve performance, add effects, refine UX" },
        { name: "8. Build & Deploy", desc: "Export to target platforms" },
      ],
    },
    {
      title: "Best Practices for Interaction Design",
      description: "Tips to streamline your prototyping workflow",
      items: [
        { name: "Use Empty GameObjects", desc: "Create empty parent objects for future art assets" },
        { name: "Build Functionality First", desc: "Implement logic on empty objects, add art later" },
        { name: "Prototype High-Risk Elements", desc: "Test uncertain mechanics early in the process" },
        { name: "Break Down Tasks", desc: "Divide work into manageable, testable chunks" },
        { name: "Start Simple", desc: "Build basic functionality before adding complexity" },
        { name: "Test Early & Often", desc: "Playtest interactions frequently during development" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {workflows.map((workflow) => (
        <Card key={workflow.title} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl">{workflow.title}</CardTitle>
            <CardDescription>{workflow.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workflow.items.map((item) => (
                <div key={item.name} className="border-l-2 border-accent pl-4 py-2">
                  <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ScriptingSection() {
  return (
    <div className="space-y-6">
      {/* Lifecycle Methods */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-xl">MonoBehaviour Lifecycle Methods</CardTitle>
          <CardDescription>Core methods that Unity calls automatically</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Awake()", desc: "Called before scene initialization (use for setup)" },
              { name: "Start()", desc: "Called after scene object creation (use for initialization)" },
              { name: "Update()", desc: "Called once per frame (use for input, non-physics updates)" },
              { name: "FixedUpdate()", desc: "Called at fixed intervals (use for physics)" },
              { name: "LateUpdate()", desc: "Called at end of frame (use for camera follow)" },
              { name: "OnEnable()", desc: "Called when object becomes enabled" },
              { name: "OnDisable()", desc: "Called when object becomes disabled" },
              { name: "OnDestroy()", desc: "Called when object is destroyed" },
            ].map((method) => (
              <div key={method.name} className="p-3 bg-muted rounded-lg">
                <code className="text-accent font-mono font-semibold">{method.name}</code>
                <p className="text-sm text-muted-foreground mt-1">{method.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Essential Patterns */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-xl">Essential Scripting Patterns</CardTitle>
          <CardDescription>Common code patterns for interaction design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Handling */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Input</Badge>
              Input Handling
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Old Input System (simple, straightforward)
float horizontal = Input.GetAxis("Horizontal");
float vertical = Input.GetAxis("Vertical");
bool jump = Input.GetButtonDown("Jump");
bool fire = Input.GetKeyDown(KeyCode.Space);

// Mouse input
if (Input.GetMouseButtonDown(0)) // Left click
Vector3 mousePos = Input.mousePosition;`}</code>
            </pre>
          </div>

          {/* Transform Manipulation */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Transform</Badge>
              Transform Manipulation
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Position
transform.position = new Vector3(0, 1, 0);
transform.Translate(Vector3.forward * speed * Time.deltaTime);

// Rotation
transform.rotation = Quaternion.Euler(0, 90, 0);
transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);

// Scale
transform.localScale = new Vector3(2, 2, 2);`}</code>
            </pre>
          </div>

          {/* Raycast Interaction */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Raycast</Badge>
              Raycast Interaction System
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Basic raycast for interaction
Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
RaycastHit hit;

if (Physics.Raycast(ray, out hit, maxDistance))
{
    IInteractable interactable = hit.collider.GetComponent<IInteractable>();
    if (interactable != null)
    {
        interactable.Interact();
    }
}`}</code>
            </pre>
          </div>

          {/* Collision Events */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Physics</Badge>
              Collision & Trigger Events
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Collision (requires Rigidbody)
void OnCollisionEnter(Collision collision)
{
    Debug.Log("Hit: " + collision.gameObject.name);
}

// Trigger (requires Collider with "Is Trigger" checked)
void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        // Do something
    }
}`}</code>
            </pre>
          </div>

          {/* Coroutines */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Timing</Badge>
              Coroutines for Timed Events
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Start coroutine
StartCoroutine(DelayedAction());

// Coroutine definition
IEnumerator DelayedAction()
{
    yield return new WaitForSeconds(2f);
    Debug.Log("Executed after 2 seconds");
    
    yield return new WaitForEndOfFrame();
    Debug.Log("Executed at end of frame");
}`}</code>
            </pre>
          </div>

          {/* Animation Control */}
          <div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">Animation</Badge>
              Animation Control
            </h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Get animator
Animator animator = GetComponent<Animator>();

// Trigger animations
animator.SetTrigger("Jump");
animator.SetBool("IsRunning", true);
animator.SetFloat("Speed", currentSpeed);
animator.SetInteger("State", 1);`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Design Patterns */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-xl">Common Interaction Design Patterns</CardTitle>
          <CardDescription>Reusable architectural patterns for interactive experiences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interface-Based */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Interface-Based Interaction System</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`public interface IInteractable
{
    void Interact();
}

public class Door : MonoBehaviour, IInteractable
{
    public void Interact()
    {
        // Open door logic
    }
}`}</code>
            </pre>
          </div>

          {/* Event-Driven */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Event-Driven Architecture</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Using UnityEvents
using UnityEngine.Events;

public UnityEvent onPlayerEnter;

void OnTriggerEnter(Collider other)
{
    onPlayerEnter?.Invoke();
}`}</code>
            </pre>
          </div>

          {/* Singleton */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Singleton Pattern (for managers)</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-card border-border border-accent/50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Tips for Interaction Designers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Use public variables to expose settings in Inspector for quick iteration",
              "Use [SerializeField] for private variables that need Inspector access",
              "Use Debug.Log() extensively for testing",
              "Use Gizmos to visualize raycasts and trigger zones in Scene view",
              "Leverage ScriptableObjects for data-driven design",
              "Use Prefabs for reusable interactive elements",
              "Test interactions in Play mode frequently",
              "Keep code simple and readable for rapid prototyping",
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-accent/5 rounded-lg border border-accent/20">
                <span className="text-accent font-bold">•</span>
                <span className="text-sm text-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
