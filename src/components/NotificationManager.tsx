import { useEffect } from "react";
import { useBrowserNotification } from "@/hooks/useBrowserNotification";
import { useWebPush } from "@/hooks/useWebPush";
import { toast } from "sonner";

/**
 * NotificationManager
 * 
 * - Handles initial permission request.
 * - Registers the Service Worker for background push.
 * - (Optional) Subscribes to VAPID push if key is provided.
 */
const NotificationManager = () => {
    const { permission, requestPermission } = useBrowserNotification();
    const { registerServiceWorker, subscribeToPush } = useWebPush();

    // REPLACE THIS WITH THE KEY YOU GENERATED FROM THE TERMINAL
    const VAPID_PUBLIC_KEY = "BPVZhM5i-VJRFJic4f4q4MVN1c2ezoeM6HvBC3BqpMTkYbvPqWlf10JVl7yPGmmklyTRbz-3KcXuRcBvwC_pXvw";

    // 1. Mount Service Worker
    useEffect(() => {
        registerServiceWorker();
    }, [registerServiceWorker]);

    // 2. Request Permission & Subscribe
    useEffect(() => {
        const handleSubscription = async () => {
            if (permission === 'granted' && VAPID_PUBLIC_KEY !== "PASTE_YOUR_PUBLIC_KEY_HERE") {
                const sub = await subscribeToPush(VAPID_PUBLIC_KEY);
                if (sub) {
                    console.log("==========================================");
                    console.log("✅ COPY THIS SUBSCRIPTION FOR BACKEND:");
                    console.log(JSON.stringify(sub));
                    console.log("==========================================");
                }
            }
        };

        handleSubscription();

        if (permission === 'default') {
            toast("Enable Notifications?", {
                description: "Receive updates on projects and team activity.",
                action: {
                    label: "Allow",
                    onClick: async () => {
                        await requestPermission();
                        // The effect will re-run when permission changes
                    }
                },
                duration: Infinity,
            });
        }
    }, [permission, requestPermission, subscribeToPush]);

    return null;
};

export default NotificationManager;
