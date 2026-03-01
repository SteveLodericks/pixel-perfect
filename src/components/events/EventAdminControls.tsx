import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import DeleteEventDialog from "./DeleteEventDialog";

interface EventFields {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  event_time: string | null;
  location: string | null;
  capacity: string | null;
  eventbrite_id: string;
}

interface EventAdminControlsProps {
  event: EventFields;
  onUpdated: () => void;
  onDeleted: () => void;
}

const EventAdminControls = ({ event, onUpdated, onDeleted }: EventAdminControlsProps) => {
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    title: event.title,
    description: event.description || "",
    date: event.event_date || "",
    time: event.event_time || "",
    location: event.location || "",
    capacity: event.capacity || "",
    eventbrite_id: event.eventbrite_id,
  });

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from("events")
        .update({
          title: form.title,
          description: form.description || null,
          date: form.date || null,
          time: form.time || null,
          location: form.location || null,
          capacity: form.capacity || null,
          eventbrite_id: form.eventbrite_id,
        })
        .eq("id", event.id);

      if (error) throw error;

      toast({ title: "Event updated", description: "Changes saved successfully." });
      setEditing(false);
      onUpdated();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update event.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const { error } = await supabase.from("events").delete().eq("id", event.id);
      if (error) throw error;

      toast({ title: "Event deleted", description: `"${event.title}" has been removed.` });
      setDeleteOpen(false);
      onDeleted();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete event.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
    }
  };

  const handleCancel = () => {
    setForm({
      title: event.title,
      description: event.description || "",
      date: event.event_date || "",
      time: event.event_time || "",
      location: event.location || "",
      capacity: event.capacity || "",
      eventbrite_id: event.eventbrite_id,
    });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="space-y-3 pt-3 border-t border-border">
        <div>
          <Label htmlFor={`title-${event.id}`}>Title</Label>
          <Input
            id={`title-${event.id}`}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor={`desc-${event.id}`}>Description</Label>
          <Textarea
            id={`desc-${event.id}`}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={2}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor={`date-${event.id}`}>Date</Label>
            <Input
              id={`date-${event.id}`}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="March 15, 2026"
            />
          </div>
          <div>
            <Label htmlFor={`time-${event.id}`}>Time</Label>
            <Input
              id={`time-${event.id}`}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              placeholder="2:00 PM - 5:00 PM"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor={`loc-${event.id}`}>Location</Label>
            <Input
              id={`loc-${event.id}`}
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor={`cap-${event.id}`}>Capacity</Label>
            <Input
              id={`cap-${event.id}`}
              value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            />
          </div>
        </div>
        <div>
          <Label htmlFor={`ebid-${event.id}`}>Eventbrite ID</Label>
          <Input
            id={`ebid-${event.id}`}
            value={form.eventbrite_id}
            onChange={(e) => setForm({ ...form, eventbrite_id: e.target.value })}
          />
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-1" />
            {saving ? "Saving…" : "Save"}
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel} disabled={saving}>
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-2 pt-2">
        <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
          <Pencil className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-destructive hover:text-destructive"
          onClick={() => setDeleteOpen(true)}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </div>
      <DeleteEventDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        eventTitle={event.title}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </>
  );
};

export default EventAdminControls;
