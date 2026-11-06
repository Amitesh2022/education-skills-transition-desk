import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'
describe('education skills transition store', () => { beforeEach(() => setActivePinia(createPinia())); it('loads transition plans from the Java API', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, title: 'European basic skills school alliance', owner: 'European Education Cooperation Team', status: 'Approved', priority: 'Low' }] })); const store = useDeliveryStore(); await store.load(); expect(store.offers).toHaveLength(1); expect(store.approvedShare).toBe(100) }) })
