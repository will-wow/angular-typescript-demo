import _ = require('lodash');
import chai = require('chai');

import Todo from './Todo';

const expect = chai.expect;

describe('Todo', () => {
  let todo: Todo;

  beforeEach(() => {
    todo = new Todo();
  });

  describe('init', () => {
    it('should initialize with no items', (done) => {
      expect(todo.listItems()).to.be.empty;
      done();
    });

    it('should initialize with the given items', (done) => {
      const list = ['one', 'two', 'three'];

      const initializedTodo = new Todo(list);
      
      expect(initializedTodo.listItems()).to.eql(list);
      done();
    });
  });

  describe('adding items', () => {
    it('should add an item', (done) => {
      expect(todo.addItem('test todos')).to.be.true;

      done();
    });

    it('should not add a duplicate item', (done) => {
      expect(todo.addItem('test todos')).to.be.true;
      expect(todo.addItem('test todos')).to.be.false;

      done();
    });
  });

  describe('listing items', () => {
    it('should list all items', (done) => {
      todo.addItem('one');
      todo.addItem('two');
      todo.addItem('three');

      expect(todo.listItems()).to.eql(['one', 'two', 'three']);

      done();
    });

    it('should return an empty list if there are no items', (done) => {
      expect(todo.listItems()).to.eql([]);

      done();
    });
  });

  describe('getting items', () => {
    it('should get an item by index', (done) => {
      todo.addItem('zero');
      todo.addItem('one');

      expect(todo.getItemByIndex(1)).to.eql('one');

      done();
    });

    it('should get an item by search', (done) => {
      todo.addItem('this is a test');
      todo.addItem('this is also a test');

      expect(todo.getItemsByFilter('is a test')).to.eql(['this is a test']);

      done();
    });

    it('should get multiple items by search', (done) => {
      todo.addItem('this is a test');
      todo.addItem('this is also a test');

      expect(todo.getItemsByFilter('a test')).to.eql([
        'this is a test',
        'this is also a test',
      ]);

      done();
    });

    it('should return an empty array if no matches', (done) => {
      todo.addItem('this is a test');
      todo.addItem('this is also a test');

      expect(todo.getItemsByFilter('foo')).to.eql([]);

      done();
    });
  });

  describe('removing items', () => {
    it('should remove items by index', (done) => {
      todo.addItem('zero');
      todo.addItem('one');
      todo.addItem('two');

      expect(todo.removeItemByIndex(1)).to.equal('one');
      expect(todo.listItems().length).to.equal(2);

      done();
    });

    it('should return undefined when it can\'t find an item by index', (done) => {
      todo.addItem('zero');
      todo.addItem('one');
      todo.addItem('two');

      expect(todo.removeItemByIndex(4)).to.be.undefined;
      expect(todo.listItems().length).to.equal(3);

      done();
    });
  });
});