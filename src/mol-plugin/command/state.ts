/**
 * Copyright (c) 2018 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

import { PluginCommand } from './command';
import { Transform, State } from 'mol-state';
import { StateAction } from 'mol-state/action';

export const SetCurrentObject = PluginCommand<{ state: State, ref: Transform.Ref }>('ms-data', 'set-current-object');
export const ApplyAction = PluginCommand<{ state: State, action: StateAction.Instance, ref?: Transform.Ref }>('ms-data', 'apply-action');
export const Update = PluginCommand<{ state: State, tree: State.Tree | State.Builder }>('ms-data', 'update');

// export const UpdateObject = PluginCommand<{ ref: Transform.Ref, params: any }>('ms-data', 'update-object');

export const RemoveObject = PluginCommand<{ state: State, ref: Transform.Ref }>('ms-data', 'remove-object');