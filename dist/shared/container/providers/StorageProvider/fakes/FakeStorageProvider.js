"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeStorageProvider {
  constructor() {
    this.storage = [];
  }

  async saveFile(file) {
    this.storage.push(file);
    return file;
  }

  async deleteFile(file) {
    const indexFile = this.storage.findIndex(storageFile => storageFile === file);
    this.storage.splice(indexFile, 1);
  }

}

var _default = FakeStorageProvider;
exports.default = _default;